import { useState } from 'react';

const TimePumpingCalculator = () => {
    const [miles, setMiles] = useState("");
    const [mpg, setMpg] = useState("");
    const [timePerGallon, setTimePerGallon] = useState(10);
    const [result, setResult] = useState(null);


    const calculateTime = () => {
        const milesNum = Number(miles);
        const mpgNum = Number(mpg);
        const time = Number(timePerGallon);

        if (milesNum > 0 && mpgNum > 0 && time > 0) {
            const gallons = milesNum / mpgNum;
            const totalSeconds = gallons * time;
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = Math.floor(totalSeconds % 60);
            
            let newResult = "You Have Spent ";
            if (hours > 0) {
                newResult += `${hours} hour${hours > 1 ? 's' : ''}, `;
            }
            if (minutes > 0) {
                newResult += `${minutes} minute${minutes > 1 ? 's' : ''}, `;
            }
            newResult += `${seconds} second${seconds > 1 ? 's' : ''} pumping gas. `;
            setResult(newResult); 
        } else {
            setResult("Please enter valid numbers.");
        }
    };

    return (
        <div>
            <h1>Time At The Pump</h1>
            <div>
                <label>Miles Driven</label>
                <br />
                <input type="number" value={miles} onChange={(event) => setMiles(event.target.value)}/>
                <br />
                <label>Miles per Gallon</label>
                <br />
                <input type="number" value={mpg} onChange={(event) => setMpg(event.target.value)}/>
                <br />
                <label>Seconds Per Gallon (default 10)</label>
                <br />
                <input type="number" value={timePerGallon} onChange={(event) => setTimePerGallon(event.target.value)}/>
                <br />
                <br />
                <button onClick={calculateTime}>Calculate</button>
            </div>

            {result && (
                <div>
                    <h2>Result:</h2>
                    <p>{result}</p>
                </div> 
            )}
        </div>
    )
};

export default TimePumpingCalculator;