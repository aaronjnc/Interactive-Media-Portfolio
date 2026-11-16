import "./VideoProject.css";

function VideoProject() {
    return (
        <>
        <main className="container">
            <section className="projectName">
                <h1>Video Project</h1>
            </section>
            <section id='finalVideo'>
                <video width="320" height="240" controls>
                    <source src="//:0" type="video/mp4"/>
                </video>
                <p>Lorem Ipsum</p>
            </section>
        </main>
        </>
    );
}

export default VideoProject;