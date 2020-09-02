<template>
    <div class="messages">
        <message-component
            v-for="message in messageArray"
            :key="message.id"
            :message="message"
            class="messages__message"
            :side="message.side"
        />
    </div>
</template>
<script src="./MessagesComponent.js"/>
<style src="./MessagesComponent.scss" lang="scss"/>
