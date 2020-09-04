<template>
    <div>
        <router-link
            :to="`/dialog/${data.id}`"
            :class="[selectedDialog.id === data.id ? 'selected' : '', 'sidebar']"
        >
            <div class="caption">
                {{ data.subject}}
            </div>
            <div class="data">
                {{ data.created }}
            </div>
        </router-link>
    </div>
</template>
<script src="./ListDialogsComponent.js"/>
<style src="./ListDialogsComponent.scss" lang="scss"/>
