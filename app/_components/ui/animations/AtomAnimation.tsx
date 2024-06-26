export default function AtomAnimation(props) {
    return (
        <div className="atom">
            <div className="proton" />
            <div className="neutrons">
                <div className="first-neutron"></div>
                <div className="second-neutron"></div>
            </div>
            <div className="electrons">
                <div className="first-electron"></div>
                <div className="second-electron"></div>
            </div>
        </div>
    );
}