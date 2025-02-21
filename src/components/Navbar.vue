<template>
    <nav> 
        <img src="/menu.svg" alt="menu icon" class="menu-icon" @click="showMenu()">
        <div class="flex-grow1 logo"><img src="/Storm.svg" alt="Logo"></div>
        <div class="search">
            <input 
                type="search" 
                placeholder="Search" 
                v-model="searchText" 
                @keyup.enter="handleSearch()"
                @search="handleClear()"
            />
            <button @click="handleSearch">Search</button>
        </div>
        <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
            <ul class="nav-items">
                    <li><img src="/Gear.svg" alt="settings gear"></li>
                    <li><img src="/Notifications.svg" alt="notifications bell"></li>
                    <li class="flex flex-row flex-align-center"><img src="/user.svg" alt="user icon"> <span class="user">Adriana Arias</span></li>
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        data() {
            return {
                showMobileMenu: false,
                searchText: "",
            };
        },
        methods: {
            showMenu() {
                this.showMobileMenu = !this.showMobileMenu;
            },
            handleSearch() {
                this.$emit('search', this.searchText);
            },
            handleClear() {
                this.$emit('search', this.searchText);
            }
        },
    };  
</script>