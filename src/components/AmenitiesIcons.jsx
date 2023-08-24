import Link from 'next/link';
import { FaHotel, FaBusAlt, FaUtensils, FaBriefcase, FaClipboardList, FaMap, FaExclamationCircle } from "react-icons/fa";

export default function AmenitiesIcons({ titulo, icon }) {
    const Icons = {
        aloj: FaHotel,
        bus: FaBusAlt,
        rest: FaUtensils,
        agen: FaBriefcase,
        act: FaClipboardList,
        map: FaMap,
        err: FaExclamationCircle
    }
    const Icon = Icons[icon] ? Icons[icon] : Icons.err;
    return (
        <div className="">
            <div className="mb-2 flex justify-center">
                <Icon size={30} className="icon-size-1"></Icon>
            </div>
            <div>
                <h1 className="m-0">{titulo}</h1>
            </div>
        </div>
    )
}
