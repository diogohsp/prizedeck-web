export const useResourceNotFoundModel = () => {
  const reloadPage = () => {
    return window.location.reload();
  };

  return { reload: reloadPage };
};
