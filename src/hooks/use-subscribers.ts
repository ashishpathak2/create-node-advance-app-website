import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type SubscriberCountResponse = {
  count: number;
};

type InsertSubscriber = {
  email: string;
};

type CreateSubscriberResponse = {
  id: number;
  email: string;
  createdAt: string;
};

const subscribersApi = {
  countPath: "/api/subscribers/count",
  createPath: "/api/subscribers",
} as const;

export function useSubscribersCount() {
  return useQuery({
    queryKey: [subscribersApi.countPath],
    queryFn: async () => {
      const res = await fetch(subscribersApi.countPath);
      if (!res.ok) throw new Error("Failed to fetch count");
      return (await res.json()) as SubscriberCountResponse;
    },
  });
}

export function useCreateSubscriber() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const res = await fetch(subscribersApi.createPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

      return (await res.json()) as CreateSubscriberResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [subscribersApi.countPath] });
    },
  });
}
