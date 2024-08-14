import LoadingFlightsItem from "./loading-flight-item";

export default function LoadingListFlight() {
  return (
    <div className="flex flex-col w-full gap-6">
      <LoadingFlightsItem />
      <LoadingFlightsItem />
      <LoadingFlightsItem />
    </div>
  );
}
