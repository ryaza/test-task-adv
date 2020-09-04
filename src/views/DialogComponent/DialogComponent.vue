<template>
    <div v-if="!isLoading" class="dialog-wrapper">
        <div class="dialog">
            <div class="dialog__title">Сообщения:
                <span class="title__number"> {{ messageData.length }} </span>
            </div>
            <div
                v-for="data in messageData"
                :key="data.id"
                class="dialog__message"
                @click="select(data)"
            >
                <list-dialogs-component :data="data"/>
            </div>
        </div>
        <div class="view" v-if="selectedDialog != null">
            <messages-component class="view__main"/>
            <type-field-component class="view__type"/>
        </div>
    </div>
    <spinner-component v-else/>
</template>
<script src="./DialogComponent.js"/>
<style src="./DialogComponent.scss" lang="scss"/>
