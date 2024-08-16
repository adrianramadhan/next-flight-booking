import React from "react";
import SeatItem from "./seat-item";

export default function SeatList() {
  return (
    <form className="flex flex-col gap-5">
      <div className="seat-row flex justify-between">
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
      </div>
      <div className="seat-row flex justify-between">
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
      </div>
      <div className="seat-row flex justify-between">
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
      </div>
      <div className="seat-row flex justify-between">
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
      </div>
      <div className="seat-row flex justify-between">
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
      </div>
      <div className="seat-row flex justify-between">
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
        <div className="seat-col flex gap-[19px]">
          <SeatItem />
          <SeatItem />
        </div>
      </div>
    </form>
  );
}
