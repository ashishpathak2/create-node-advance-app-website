import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertSubscriber } from "@shared/schema";

export function useSubscribersCount() {
  return useQuery({
    queryKey: [api.subscribers.count.path],
    queryFn: async () => {
      const res = await fetch(api.subscribers.count.path);
      if (!res.ok) throw new Error("Failed to fetch count");
      return api.subscribers.count.responses[200].parse(await res.json());
    },
  });
}

export function useCreateSubscriber() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const validated = api.subscribers.create.input.parse(data);
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
      
      if (!res.ok) {
        if (res.status === 409) {
          throw new Error("Email already subscribed");
        }
        if (res.status === 400) {
          throw new Error("Invalid email format");
        }
        throw new Error("Failed to subscribe");
      }
      
      return api.subscribers.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.subscribers.count.path] });
    },
  });
}
