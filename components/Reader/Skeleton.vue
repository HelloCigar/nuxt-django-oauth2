<template>
    <div class="flex flex-row flex-nowrap justify-between">
        <n-flex vertical class="mt-12 mr-16">
            <n-flex>
                <n-skeleton text :repeat="3" />
            </n-flex>
        </n-flex>
        <n-flex vertical class="grow">
            <div class="mt-12 pt-2" style="direction: rtl;">
                <n-flex>
                    <n-skeleton text :repeat="3" /> <n-skeleton text style="width: 60%" />
                </n-flex>
            </div>
            <n-flex class="mb-12 pb-1">
                <n-flex class="w-4/6">
                    <n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" />
                </n-flex>
            </n-flex>
        </n-flex>
    </div>
    <n-divider />
</template>