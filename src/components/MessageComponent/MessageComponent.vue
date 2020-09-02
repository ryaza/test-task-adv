<template>
    <div :class="['message__wrapper', side]">
        <div class="message">
            <span class="text"> {{ message.text }}</span>
            <div class="info">
                <span class="author"> {{ message.author }}</span>
                <span class="data"> {{ message.time }} {{ message.date }}</span>
            </div>
        </div>
        <div class="empty"/>
    </div>
</template>
<script src="./MessageComponent.js"/>
<style src="./MessageComponent.scss" lang="scss"/>
