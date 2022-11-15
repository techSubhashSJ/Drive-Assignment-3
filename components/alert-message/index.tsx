/**
 * @Author Subhash Jadhav
 * @Description This component renders error or warning messages
 * @param {string or null} error => contains error message string or null
 */

const AlertMessage = (props: { error: string | null }) => {
  const { error } = props;
  return (
    <div className="flex justify-center">
      <div className="mx-[5%] w-full max-w-screen-xl">
        <div className="my-3 bg-red-300 p-3 rounded">
          <h1 className="text-lg text-center" title="alert-message">
            {error}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AlertMessage;
