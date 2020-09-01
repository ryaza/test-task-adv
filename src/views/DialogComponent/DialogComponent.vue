<template>
    <div v-if="!isLoading" class="wrapper">
        <div class="dialogs">
            <div class="title">Сообщения:
                <span class="number"> {{ messageData.length }} </span>
            </div>
            <div
                v-for="data in messageData"
                :key="data.id"
                class="dialog"
                @click="select({ dialog: data })"
            >
                <list-dialogs-component
                    :data="data"
                />
            </div>
        </div>
        <div class="view" v-if="selectedDialog != null">
            <messages-component class="main"/>
            <type-field-component class="type"/>
        </div>
    </div>
    <loading-component v-else/>
</template>
<script src="./DialogComponent.js"/>
<style src="./DialogComponent.scss" lang="scss"/>
