export default function Navbar(){
    return(
        <nav className="flex justify-between p-5 shadow">
            <h1 className="font-bold">Tanupreet Portfolio</h1>
            <ul className="flex gap-5">
                <li><a href="#career">Career</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#references">References</a></li>
            </ul>

        </nav>
    );
}