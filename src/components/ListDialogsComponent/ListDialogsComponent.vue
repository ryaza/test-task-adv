<template>
    <router-link
        :to="`/dialog/${data.id}`"
        :class="[
            'dialog-item',
            selectedDialog.id === data.id ? 'dialog-item--selected' : '',
            'sidebar'
        ]"
    >
        <div class="dialog-item__caption">
            {{ data.subject}}
        </div>
        <div>
            {{ data.created }}
        </div>
    </router-link>
</template>
<script src="./ListDialogsComponent.js"/>
<style src="./ListDialogsComponent.scss" lang="scss"/>
