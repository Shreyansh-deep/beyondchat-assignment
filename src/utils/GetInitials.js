 export const GetInitials = (name) => {
    const [firstName, lastName] = name?.split(' ') ?? [];
    const firstNameInitial = firstName?.charAt(0).toUpperCase();
    const lastNameInitial = lastName?.charAt(0).toUpperCase();
    return `${firstNameInitial ?? ''}${lastNameInitial ?? ''}`;
  };