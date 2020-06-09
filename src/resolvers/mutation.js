/*

ADD YOUR MUTATION HERE:

export const addCars = async (args, context) => {
    

}


*/

export const createUser = async (args, context) => {
  const newUser = await context.prisma.user.create({
    data: {
      email: args.email,
      name: args.name,
    },
  });
  return await newUser;
};
