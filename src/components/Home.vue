<template>
    <main id="home">
        <div class="about__me">
            <img src="../assets/my-avatar.svg" alt="avatar logo">
            <h1>Tomer Asulin</h1>
            <h3>Web Developer</h3>
            <p></p>
            <div class="skills_projects_link"><router-link to="/projects">Projects/Skills</router-link>
            </div>
            <div class="skills_projects_link"><a href="TomerAsulinCV.pdf" download>download
                    CV</a>
            </div>
        </div>
    </main>
    <footer>
        © Developed by Tomer Asulin
    </footer>
</template>

<style>
a {
    text-decoration: none;
}

main#home {
    width: 100%;
    height: 100vh;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#home>.about__me {
    text-align: center;
    width: 80%;
    line-height: 1.5rem;
}

#home>.about__me>h1 {
    margin: 20px 0 0;
    font-size: 36px;
    font-weight: 900;
    color: #db5461;
}

#home>.about__me>h3 {
    font-size: 28px;
    font-weight: 500;
}

#home>.about__me>h1,
#home>.about__me>h3 {
    font-style: normal;
    line-height: 42px;
    letter-spacing: 0.115em;
}

#home>.about__me p {
    font-weight: 100;
    font-size: 22px;
    padding: 2rem;
}

#home>.about__me img {
    border-radius: 50%;
    height: 232px;
    width: 232px;
}

.skills_projects_link {
    position: relative;
    margin-bottom: 10px;
}

.skills_projects_link>a {
    text-transform: uppercase;
    color: white;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
}

.skills_projects_link>a:hover {
    color: #db5461;
    transition: all 0.5s ease-in-out;
}

.skills_projects_link>a:hover::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    margin: auto;
    text-align: center;
    content: '';
    width: 30px;
    height: 2px;
    background-color: #db5461;
    transition: background-color 0.5s ease-in-out;
}
</style>