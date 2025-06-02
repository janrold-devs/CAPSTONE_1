export const filterUser = (users, searchTerm) => {
  const searchLower = (searchTerm || "").toLowerCase();

  return users.filter((users) => {
    if (!users) return false;

    return (
      (users.id?.toString() || "").includes(searchLower) ||
      (users.username?.toLowerCase() || "").includes(searchLower) ||
      (users.first_name?.toLowerCase() || "").includes(searchLower) ||
      (users.last_name?.toLowerCase() || "").includes(searchLower) ||
      (users.email?.toLowerCase() || "").includes(searchLower) ||
      (users.role?.toLowerCase() || "").includes(searchLower)
    );
  });
};
