<template>
    <n-flex class="page-wrapper" justify="space-between">
        <Header />
        <div class="main-container">
            <div class="content-wrapper">
                <slot></slot>
            </div>
        </div>
    </n-flex>

</template>

<style scoped>
.page-wrapper {
    min-height: 100%;
}

.main-container {
    flex: 1 0 auto;
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
    height: 100%;
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    white-space: normal;
    border-radius: 5px;
    position: relative;
    grid-area: center;
    box-shadow: none;
    vertical-align: baseline;
    box-sizing: content-box;
}

</style>