<template>
    <div class="page-wrapper">
        <div class="main-container">
            <slot></slot>
        </div>
    </div>

</template>

<style>
.page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
}

.main-container {
    flex: 1 0 auto;
    min-height: 0;
    display: grid;
    box-sizing: border-box;
    grid-template-rows: [left-start center-start right-start] 1fr [left-end center-end right-end];
    grid-template-columns: [left-start center-start] 1fr [left-end right-start] 1fr [center-end right-end];
    align-items: center;
    justify-content: center;
    justify-items: center;
    grid-column-gap: 160px;
    column-gap: 160px;
    padding: 80px;
    width: 100%;
}
</style>