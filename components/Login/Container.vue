<script setup lang="ts">
</script>

<template>
    <div class="login-container">
        <div class="input-wrapper">
                <LoginForm />
                </div>
                <p class="other-page">Don't have an account? 
                    <NuxtLink to="/signup">
                        Sign Up
                    </NuxtLink>
                </p>
                <div class="divider-wrapper">
                    <n-divider>
                        Or
                    </n-divider>
                </div>
                <div class="social-section">
                    <button class="social-btn">
                        <NuxtLink to="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/auth/google&prompt=consent&response_type=code&client_id=723834774366-nu46urib4h74appn1is3t81hjp559617.apps.googleusercontent.com&scope=openid%20email%20profile&access_type=offline">
                            <span class="social-logo-wrapper">
                                <img class="social-logo" src="https://auth.openai.com/assets/google-logo-NePEveMl.svg" alt="Google logo">
                            </span>
                            <span class="social-text">Continue with Google</span>
                        </NuxtLink>
                    </button>
                    <button class="social-btn">
                        <NuxtLink to="https://github.com/login/oauth/authorize?client_id=Ov23liOdAKEwxi9FPNts&redirect_uri=http://localhost:3000/auth/github&login&scope&allow_signup&allow_signup&prompt=select_account">
                            <span class="social-logo-wrapper">
                                <img class="social-logo" src="/assets/github-mark.svg" alt="Microsoft logo">
                            </span>
                            <span class="social-text">Continue with Github</span>
                        </NuxtLink>
                    </button>
                </div>
        </div>
</template>

<style scoped>
.login-container {
    background-color: #fff;
    padding: 0 40px 40px;
    border-radius: 3px;
    box-shadow: none;
    width: 320px;
    box-sizing: content-box;
    flex-shrink: 0;
}

.input-wrapper {
    position: relative;
    margin-bottom: 25px;
    width: 320px;
    box-sizing: content-box;
}

.continue-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 52px;
    width: 320px;
    background-color: #10a37f;
    color: #fff;
    margin: 24px 0 0;
    border-radius: 6px;
    padding: 4px 16px;
    font: inherit;
    border-width: 0;
    cursor: pointer;
}

.email-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border: 1px solid #c2c8d0;
    border-radius: 6px;
    box-sizing: border-box;
    color: #2d333a;
    font-family: inherit;
    font-size: 16px;
    height: 52px;
    line-height: 1.1;
    outline: none;
    padding-block: 1px;
    padding-inline: 2px;
    padding: 0 16px;
    transition: box-shadow .2s ease-in-out, border-color .2s ease-in-out;
    width: 100%;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0;
}

.email-label {
    position: absolute;
    top: 26px;
    left: 16px;
    background-color: #fff;
    color: #6f7780;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    max-width: 90%;
    overflow: hidden;
    pointer-events: none;
    padding: 1px 6px;
    text-overflow: ellipsis;
    transform: translateY(-50%);
    transform-origin: 0;
    transition: transform .15s ease-in-out, top .15s ease-in-out, padding .15s ease-in-out;
    white-space: nowrap;
    z-index: 1;
}

.other-page {
    text-align: center;
    margin-top: 16px;
    margin-bottom: 0;
    font-size: 14px;
    width: 320px;
}

.other-page-link {
    padding: 4px;
}

.divider-wrapper {
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    border: none;
    font-size: 12px;
    font-weight: 400;
    margin: 0;
    padding: 24px 0 0;
    align-items: center;
    justify-content: center;
    width: 320px;
    vertical-align: baseline;
}

.social-section {
    margin-top: 24px;
}

.social-btn {
    padding: 0 8px 0 52px;
}

.social-btn {
    position: relative;
    width: 320px;
    border: 1px solid #c2c8d0;
    border-radius: 6px;
    font-size: 16px;
    align-items: center;
    background-color: #fff;
    height: 52px;
    transition: box-shadow .15 ease-in-out, background-color .15s ease-in-out;
    cursor: pointer;
    color: #2d333a;
    margin-bottom: 8px;
    display: flex;
    outline: 0;
}

.social-logo-wrapper {
    position: absolute;
    left: 26px;
    top: 50%;
    transform: translate(-50%) translateY(-50%);
}

.social-logo {
    width: 20px;
    height: 20px;
    display: inline-block;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}
</style>