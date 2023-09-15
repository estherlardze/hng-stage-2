import { playIcon } from "../../assets"
import { Rating } from ".."

export default function index() {
  return (
    <section className="ml-[8.5%] mt-[120px] mb-[100px]">
        <div className="font-bold text-5xl leading-[56px] text-white mb-4">John Wick 3 : <br />Parabellum</div>
        
        <Rating
            rating="86.0 / 100"
            like="97%"
        />

        <p className="text-left text-white font-medium text-sm leading-[18px] w-[100%] sm:w-[50%] lg:[40%] ]">
            John Wick is on the run after killing a member
            of the international assassins' guild, and with
            a $14 million price tag on his head, he is the
            target of hit men and women everywhere.
        </p>

        <button className="flex flex-row items-center gap-3 bg-rose-700 py-[6px] px-[16px]
        rounded-md cursor-pointer mt-[20px]">
            <img src={playIcon} alt="play" />
            <span className="font-bold text-sm leading-[24px] text-white ">WATCH TRAILER</span>
        </button>

    </section>
  )
}
