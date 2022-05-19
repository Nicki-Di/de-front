import Team from "../Common/Team";
import Gap from "../Common/Gap";
import Call from "./Call";
import Contact from "../Common/Contact";

export default function Bottom() {
    return (
    <div className = {"flex items-center justify-center"}>
        <div className = {"max-w-6xl"}>
            <Call/>
            <Gap/>
            <Team/>
        </div>
    </div>
    )
}