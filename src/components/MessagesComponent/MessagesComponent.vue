<template>
    <div class="messages">
        <message-component
            v-for="(message, index) in messageArray"
            :key="message.id"
            :message="message"
            class="messages__message"
            :side="index%2 ? 'right' : 'left'"
        />
    </div>
</template>
<script src="./MessagesComponent.js"/>
<style src="./MessagesComponent.scss" lang="scss"/>
