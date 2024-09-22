import { useEffect, useState } from "react";
import image1 from "../assets/image/hero.jpg";
function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(200);
    const toRotate = ["Full Stack Developer", "Creative Problem Solver", "Technology Enthusiast"];
    const period = 2000;

    useEffect(() => {
        const handleTyping = () => {
            let i = loopNum % toRotate.length;
            let fullTxt = toRotate[i];

            if (isDeleting) {
                setText(fullTxt.substring(0, text.length - 1));
            } else {
                setText(fullTxt.substring(0, text.length + 1));
            }

            let typingSpeed = 200 - Math.random() * 100;

            if (isDeleting) {
                typingSpeed /= 2;
            }

            if (!isDeleting && text === fullTxt) {
                setTimeout(() => setIsDeleting(true), period);
                typingSpeed = period;
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                typingSpeed = 500;
            }

            setDelta(typingSpeed);
        };

        const ticker = setTimeout(() => {
            handleTyping();
        }, delta);

        return () => clearTimeout(ticker);
    }, [text, isDeleting, loopNum]);

    return (
        <div className="relative flex flex-wrap bg-transparent text-white font-Rubik">
            {/* Start of Background Animation */}
            <div className="area absolute inset-0 w-full h-full z-[-1]">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            {/* End of Background Animation */}

            <div className="w-full sm:w-8/12 mb-10 relative z-10">
                <div className="container mx-auto h-full sm:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        <div className="text-4xl font-bold">
                            Life<span className="text-[#3BC4C4]">.</span>
                        </div>
                        <div>
                        </div>
                    </nav>
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold">
                                {`I am a `}
                                <span className="text-[#3BC4C4] typewrite">
                                    <span className="wrap">{text}</span>
                                </span>
                            </h1>
                            <div className="w-20 h-2 bg-[#3BC4C4] my-4"></div>
                            <p className="text-xl mb-10" style={{ width: "70%" }}>
                                Hi, I'm Mohamed Yusuf Mohamed, a Full Stack Developer passionate
                                about building user-friendly solutions. With expertise in both
                                front-end and back-end development, I strive to create impactful
                                technology that simplifies people's lives.
                            </p>
                            <button className="inline-flex items-center justify-center py-3 text-xl font-medium text-center text-white border border-transparent rounded-full px-7 bg-[#3BC4C4] hover:bg-opacity-90">
                                Learn More
                            </button>
                        </div>
                    </header>
                </div>
            </div>
            <img src={image1}
                alt="Hero Section Image" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
        </div>
    );
}

export default Hero;
