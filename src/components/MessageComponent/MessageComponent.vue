<template>
    <div :class="['message__wrapper', side]">
        <div class="message">
            <span class="text"> {{ message.text }}</span>
            <div class="info">
                <span class="author"> {{ message.author }}</span>
                <span> {{ message.created }}</span>
            </div>
        </div>
        <div class="empty"/>
    </div>
</template>
<script src="./MessageComponent.js"/>
<style src="./MessageComponent.scss" lang="scss"/>
