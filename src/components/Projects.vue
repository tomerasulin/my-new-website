<template>
    <div>
        <header id="site_header" class="container d_flex">
            <div class="bio__media">
                <img src="../assets/my-avatar.svg" alt="avatar logo">
                <div class="bio__media__text">
                    <h1>Tomer Asulin</h1>
                    <h3>Web Developer</h3>
                    <p></p>
                </div>
            </div>
            <nav>
                <router-link to='/'>Home</router-link>
                <router-link to="/projects">Projects</router-link>
                <a href="https://github.com/tomerasulin" target="_blank">
                    <i class="fab fa-github fa-lg fa-fw"></i>
                </a>
                <a href="https://www.linkedin.com/in/tomerasulin/" target="_blank"><i
                        class="fab fa-linkedin-in fa-lg fa-fw"></i></a>
                <a href="TomerAsulinCV.pdf" download><i class="fa-solid fa-file"></i></a>
            </nav>
        </header>
        <main class="container">
            <div class="error" v-if="errors">
                Sorry! It seems we can't fetch data right now 😥
            </div>
            <section id="portfolio" v-else>
                <div class="loading" v-if="loading">😴 Loading ... </div>
                <div class="projects" v-else>
                    <div v-for="project in projectsList" class="card__custom">
                        <div class="card__custom__text">
                            <div>
                                <h3>{{ trimedTitle(project.name) }}</h3>
                                <p>{{ trimedText(project.description) }}</p>
                            </div>

                            <div class="meta__data d_flex">
                                <div class="date">
                                    <h5>Updated at</h5>
                                    <div>{{ new Date(project.updated_at).toDateString() }}</div>
                                </div>
                                <img class="avatar" :src="project.owner.avatar_url">

                            </div>
                        </div>
                        <div class="card__custom__img"></div>
                        <div class="card_custom__button">
                            <a :href="project.html_url" target="_blank">
                                Code
                            </a>
                        </div>
                    </div>
                    <div style="text-align: center; width:100%" v-if="!loading">
                        <div v-if="projectsList.length < projects.length">
                            <button class="btn_load_more" v-on:click="loadMore()">Load More</button>
                        </div>
                        <div v-else>
                            <a href="" target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
                        </div>
                    </div>
                    <div id="skills_section">
                        <h2>Development Skills</h2>
                        <ul class="skills">
                            <li v-for="skill in skills">{{ skill }}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Projects',
    data() {
        return {
            data: [],
            projects: [],
            projectsList: null,
            skills: [],
            projectsCount: 5,
            perPage: 20,
            page: 1,
            loading: true,
            errors: false,
        };
    },
    methods: {
        trimedTitle: function (text) {
            let title = text.replaceAll('-', ' ').replace('_', ' ');
            if (title.length > 15) {
                return title.slice(0, 12) + ' ...';
            }
            return title;
        },
        trimedText: function (text) {
            if (text === null) {
                return 'This project has no description yet!';
            } else if (text.length > 100) {
                return text.slice(0, 100) + ' ...';
            }
            return text;
        },
        getProjects: function () {
            this.projectsList = this.projects.slice(0, this.projectsCount);
            return this.projectsList;
        },
        fetchData: function () {
            axios
                .get(
                    `https://api.github.com/users/tomerasulin/repos?sort=updated&per_page=${this.perPage}&page=${this.page}`
                )
                .then((response) => {
                    this.projects = response.data;
                    this.projects.forEach((project) => {
                        if (
                            project.language !== null &&
                            !this.skills.includes(project.language)
                        ) {
                            this.skills.push(project.language);
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);
                    this.errors = true;
                })
                .finally(() => {
                    this.loading = false;
                    this.getProjects();
                });
        },
        loadMore() {
            if (this.projectsList.length <= this.projects.length) {
                this.projectsCount += 5;
                this.projectsList = this.projects.slice(0, this.projectsCount);
            }
        },
    },
    mounted() {
        setTimeout(this.fetchData, 3000);
    }
}
</script>

<style>
/* Utility Classes */
.d_none {
    display: none;
}

.d_flex {
    display: flex;
}

.container {
    max-width: 1170px;
    margin: auto;
}

a {
    color: white;
}

a:hover {
    color: #db5461;
}

.loading {
    font-size: 2rem;
}

.bio__media {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
}

.bio__media img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
}

.bio__media__text {
    padding: 1rem;
}

.bio__media__text h1 {
    font-size: 36px;
    font-weight: 900;
    color: #db5461;
}

.bio__media__text p {
    font-weight: 100;
    font-size: 16px;
    line-height: 1.5rem;
}

.card__custom {
    position: relative;
    display: flex;
    max-width: 400px;
    height: 300px;
    min-height: 300px;
    padding: 0.5rem;
    margin-bottom: 3rem;
    flex-grow: 1;
    flex-basis: calc(100% / 2);
    align-items: center;
    justify-content: space-between;
}

.card__custom>.card__custom__text {
    max-width: calc((100% / 3) * 2);
    text-align: right;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
}

.card__custom__img {
    position: absolute;
    width: 70%;
    height: 100%;
    background-image: url(../assets/cards_bg_img.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    z-index: -1;
    left: 60%;
    transform: translateX(-50%);
    border-radius: 85px 0 100px 25px;
}

.card_custom__button a,
.btn_load_more {
    background: #f1edee;
    border: 5px solid #3d5467;
    box-sizing: border-box;
    border-radius: 54px;
    padding: 0.5rem 1rem;
    font-weight: 900;
    color: #3d5467;
}


.card_custom__button a:hover,
.btn_load_more:hover {
    cursor: pointer;
    background: #324555;
    color: white;
    border-color: #db5461;
    transition: 1s;
}

.card__custom__text h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
}


#site_header {
    text-align: center;
    padding: 2rem 0;
    justify-content: space-between;
    align-items: center;
}

#site_header>h1 {
    text-transform: uppercase;
}

nav a {
    color: #e2e2e2;
    text-transform: uppercase;
    font-weight: 900;
    margin-right: 5px;
}

nav a:hover {
    color: #db5461;
}

#portfolio {
    margin-top: 4rem;
}

#portfolio .projects {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
}

/* Skills */

#skills_section {
    margin-top: 4rem;
    min-height: 300px;
    background-image: url(../assets/skills_bg.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left;
}

#skills_section h2 {
    margin-left: 180px;
    font-size: 44px;
    color: #db5461;
    line-height: 2rem;
}

#skills_section ul {
    list-style: none;
    margin: 20px 120px;
    display: flex;
    flex-wrap: wrap;
}

#skills_section ul li {
    padding: 1rem;
    margin: 0.5rem;
    background-color: #db5461;
    border: 5px solid #3d5467;
    border-radius: 35px;
}

.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 1rem;
}

.card__back {
    display: none;
}

.rotate__card {
    transform: rotate3d(360, 0, 0, 180deg);
}

/* Site Footer */

footer {
    text-align: center;
    padding: 2rem 0;
}

@media screen and (max-width: 475px) {
    .card {
        flex-basis: 100%;
        width: 100%;
    }

    #skills_section h2 {
        margin-left: 140px;
        font-size: 40px;
    }

    #skills_section ul {
        margin: 20px 45px;
    }
}

@media screen and (max-width: 375px) {
    .bio__media img {
        height: 50px;
        width: 50px;
    }

    .bio__media__text h1 {
        font-size: 14px;
    }

    #skills_section h2 {
        font-size: 34px;
        margin-left: 75px;
    }
}
</style>