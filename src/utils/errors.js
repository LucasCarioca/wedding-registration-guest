

const errorMessages = {
  'GUEST_COUNT_LIMIT': 'All guests for this invitation have already been registered.',
  'UNKNOWN': 'Something went wrong. Please try again later or contact us for .',
};

export const getAxiosErrorMessage = (error) => {
  const code = error?.response?.data?.error ?? 'UNKNOWN';
  const message = errorMessages[code];
  console.debug(error, code, message);
  return message;
};
