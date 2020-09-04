<template>
    <form class="form">
        <input
            v-model="message"
            class="field"
            type="text"
            placeholder="Введите текст..."
            :disabled="isLoading"
            ref="field"
        />
        <button
            class="button"
            type="submit"
            :disabled="isLoading"
            @click="add"
        >
            <span v-if="!isLoading"> Send </span>
            <spinner-component class="loading" v-else/>
        </button>
    </form>
</template>
<script src="./TypeFieldComponent.js"/>
<style src="./TypeFieldComponent.scss" lang="scss"/>
