const InputError = ({ messages = [], className = '' }) => {
  const normalized = Array.isArray(messages)
    ? messages
    : typeof messages === 'string'
    ? [messages]
    : typeof messages === 'object' && messages !== null
    ? Object.values(messages).flat().filter(Boolean)
    : [];

  return (
    <>
      {normalized.map((message, index) => (
        <p key={index} className={`${className} text-right font-light text-sm text-red-600`}>
          {message}
        </p>
      ))}
    </>
  );
};

export default InputError;