import Vue from "vue";
import Router from "vue-router";


import PersonalBlog from './views/PersonalBlog.vue';
import UserProfileLite from './views/UserProfileLite.vue';
import AddNewPost from './views/AddNewPost.vue';
import Errors from './views/Errors.vue';
import ComponentsOverview from './views/ComponentsOverview.vue';
import Tables from './views/Tables.vue';
import BlogPosts from './views/BlogPosts.vue';

import Articles from './views/article/ArticleList.vue'
import Article from './views/article/Article.vue'
import AddArticle from './views/article/AddArticle.vue'
import EditArticle from './views/article/EditArticle.vue'

import Authors from './views/author/AuthorList.vue'
import AddAuthor from './views/author/AddAuthor.vue'
import EditAuthor from './views/author/EditAuthor.vue'

import Mountains from './views/mountain/MountainList.vue'

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
    routes: [{
            path: '/',
            redirect: '/articles',
        },

        {
            path: "/articles",
            // alias: "/articles",
            name: "articles",
            component: Articles
        },
        {
            path: "/article/post/:id",
            name: "article-details",
            meta: {
                layout : 'article'
            },
            component: Article
        },
        {
            path: "/article/edit/:id",
            name: "edit-article",
            component: EditArticle
        },
        {
            path: "/article/add",
            name: "add-article",
            component: AddArticle
        },
        {
            path: "/authors",
            name: "authors",
            component: Authors
        },
        {
            path: "/author/add",
            name: "add-author",
            component: AddAuthor
        },
        {
            path: "/author/edit/:id",
            name: "edit-author",
            component: EditAuthor
        },{
            path: "/mountains",
            name: "mountains",
            component: Mountains
        },
        {
            path: '/blog-overview',
            name: 'blog-overview',
            component: PersonalBlog,
        },
        {
            path: '/user-profile-lite',
            name: 'user-profile-lite',
            component: UserProfileLite,
        },
        {
            path: '/add-new-post',
            name: 'add-new-post',
            component: AddNewPost,
        },
        {
            path: '/errors',
            name: 'errors',
            component: Errors,
        },
        {
            path: '/components-overview',
            name: 'components-overview',
            component: ComponentsOverview,
        },
        {
            path: '/tables',
            name: 'tables',
            component: Tables,
        },
        {
            path: '/blog-posts',
            name: 'blog-posts',
            component: BlogPosts,
        }, {
            path: '*',
            redirect: '/errors',
        },
    ]
});