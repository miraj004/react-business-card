import './App.css';
import DigitalCard from './components/DigitalCard';
import photo from './images/myPhoto.jpg';

function App() {
    return (
        <div className="App bg-gray-900">
            <DigitalCard
                image={photo}
                name={"Matiullah Miraj"}
                role={"Web Developer"}
                about={<>Hello! I'm Miraj, a passionate and creative web developer with a strong
                        foundation in front-end and back-end technologies. My journey in the world of web
                        development began with a deep curiosity and a love for turning ideas into digital
                        realities.</>}

            />
        </div>
    );
}

export default App;
