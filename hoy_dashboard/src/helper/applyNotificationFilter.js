import notificationData from "../data/notifications.json";

const applyNotificationFilter = (category) => {
  if (!category) {
    return notificationData.filter((item) => item.type === "email").length;
  }
  if (category === "sent") {
    return notificationData.filter(
      (item) => item.type === "email" && item.status === "sent"
    ).length;
  }
  if (category === "delivered") {
    return notificationData.filter(
      (item) => item.type === "email" && item.status === "delivered"
    ).length;
  }
  if (category === "failed") {
    return notificationData.filter(
      (item) => item.type === "email" && item.status === "failed"
    ).length;
  }
  if (category === "unknown") {
    return notificationData.filter(
      (item) => item.type === "email" && item.status === "unknown"
    ).length;
  }
};

export default applyNotificationFilter;
