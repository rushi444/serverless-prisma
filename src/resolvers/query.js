export const hello = (args, context) => {
  return 'Your GraphQL API is now LIVE!🎈 ';
};

export const getUsers = async (context) => {
  return await context.prisma.user.findMany();
};
