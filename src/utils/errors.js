

const errorMessages = {
  'GUEST_COUNT_LIMIT': 'You have reached the maximum number of guests for this invitation.',
  'UNKNOWN': 'Something went wrong. Please try again later or contact us for .',
};

export const getAxiosErrorMessage = (error) => {
  const code = error?.response?.data?.error ?? 'UNKNOWN';
  const message = errorMessages[code];
  console.debug(error, code, message);
  return message;
};
