import { useRouteError } from "react-router-dom";
import { Helper } from "../../../utils/helper";

export default function MasterLayoutError() {
  const err = useRouteError() as unknown;
  const status =
    typeof err === "object" && err !== null && "status" in err
      ? (err as { status?: number }).status ?? 500
      : 500;

  const helper = new Helper();
  helper.getStatus().status = status;

  return (
    <div>
      Status show {JSON.stringify(helper.getStatus())}
      <h1>Error Page</h1>
      <p>Something went wrong. Please try again later.</p>
      <p>If the problem persists, contact support.</p>
    </div>
  );
}
