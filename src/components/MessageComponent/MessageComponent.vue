<template>
    <div
        :class="[
            'messages-wrapper',
            `messages-wrapper--${side}`,
        ]"
    >
        <div class="messages-wrapper__message">
            <span class="message__text"> {{ message.text }}</span>
            <div class="message__info">
                <span class="info__author"> {{ message.author }}</span>
                <span> {{ message.time }} {{ message.date }}</span>
            </div>
        </div>
        <div/>
    </div>
</template>
<script src="./MessageComponent.js"/>
<style src="./MessageComponent.scss" lang="scss"/>
