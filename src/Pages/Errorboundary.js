import { ErrorBoundary } from "react-error-boundary";

export const Errorboundary = () => {
  return (
    <div>
      <ErrorBoundary>
        <p>Something is definitely wrong</p>
        <button onClick={(alert = "OOPS")}></button>
      </ErrorBoundary>
    </div>
  );
};
