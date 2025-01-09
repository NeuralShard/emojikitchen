<template>
    <div class="wrapper">
        <section class="game-section container">
            <div class="game__wrapper">
                <div class="action-area">
                    <div class="btns">
                        <div class="t1ddoc OV5tJe" :class="{ 'E2UDx': selectTab == 1 }" aria-label="Combine"
                            @click.prevent="changeTab(1)">
                            <div class="BG1f1e" v-if="selectTab !== 1"><svg height="100%" viewBox="0 0 12 14"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.16667 14C3.76333 14 3.41806 13.8629 3.13083 13.5887C2.84361 13.3146 2.7 12.985 2.7 12.6V11.9C2.7 11.3517 2.82528 10.8442 3.07583 10.3775C3.32639 9.91083 3.65333 9.52 4.05667 9.205L3.59833 6.3H1.96667C1.56333 6.3 1.21806 6.16292 0.930833 5.88875C0.643611 5.61458 0.5 5.285 0.5 4.9V2.1C0.5 1.715 0.643611 1.38542 0.930833 1.11125C1.21806 0.837083 1.56333 0.7 1.96667 0.7H5.63333V0H8.56667V0.7H11.4817L10.1433 9.205C10.5467 9.52 10.8736 9.91083 11.1242 10.3775C11.3747 10.8442 11.5 11.3517 11.5 11.9V12.6C11.5 12.985 11.3564 13.3146 11.0692 13.5887C10.7819 13.8629 10.4367 14 10.0333 14H4.16667ZM3.37833 4.9L2.93833 2.1H1.96667V4.9H3.37833ZM7.1 11.9C7.30778 11.9 7.48194 11.8329 7.6225 11.6988C7.76306 11.5646 7.83333 11.3983 7.83333 11.2C7.83333 11.0017 7.76306 10.8354 7.6225 10.7013C7.48194 10.5671 7.30778 10.5 7.1 10.5C6.89222 10.5 6.71806 10.5671 6.5775 10.7013C6.43694 10.8354 6.36667 11.0017 6.36667 11.2C6.36667 11.3983 6.43694 11.5646 6.5775 11.6988C6.71806 11.8329 6.89222 11.9 7.1 11.9ZM5.41333 8.4H8.78667L9.77667 2.1H4.42333L5.41333 8.4ZM4.16667 12.6H10.0333V11.9C10.0333 11.3167 9.81944 10.8208 9.39167 10.4125C8.96389 10.0042 8.44444 9.8 7.83333 9.8H6.36667C5.75556 9.8 5.23611 10.0042 4.80833 10.4125C4.38056 10.8208 4.16667 11.3167 4.16667 11.9V12.6Z"
                                        fill="currentColor"></path>
                                </svg></div>
                            <div class="BG1f1e" v-if="selectTab === 1"><svg height="100%" viewBox="0 0 14 12"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.59631 8.9057L1.46881 5.7782L0.403809 6.8357L4.59631 11.0282L13.5963 2.0282L12.5388 0.970703L4.59631 8.9057Z"
                                        fill="currentColor"></path>
                                </svg></div>

                            <span class="IDsIJ">Combine</span>
                        </div>
                        <div class="t1ddoc" :class="{ 'E2UDx': selectTab == 2 }" aria-label="Explore"
                            @click.prevent="changeTab(2)">
                            <div class="BG1f1e" v-if="selectTab === 1"><svg height="100%" viewBox="0 0 17 16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.19619 12.4L10.1962 9.6L12.9962 3.6L6.99619 6.4L4.19619 12.4ZM8.59619 8.8C8.36952 8.8 8.17952 8.72333 8.02619 8.57C7.87286 8.41667 7.79619 8.22667 7.79619 8C7.79619 7.77333 7.87286 7.58333 8.02619 7.43C8.17952 7.27667 8.36952 7.2 8.59619 7.2C8.82286 7.2 9.01286 7.27667 9.16619 7.43C9.31952 7.58333 9.39619 7.77333 9.39619 8C9.39619 8.22667 9.31952 8.41667 9.16619 8.57C9.01286 8.72333 8.82286 8.8 8.59619 8.8ZM8.59619 16C7.48952 16 6.44952 15.79 5.47619 15.37C4.50286 14.95 3.65619 14.38 2.93619 13.66C2.21619 12.94 1.64619 12.0933 1.22619 11.12C0.806191 10.1467 0.596191 9.10667 0.596191 8C0.596191 6.89333 0.806191 5.85333 1.22619 4.88C1.64619 3.90667 2.21619 3.06 2.93619 2.34C3.65619 1.62 4.50286 1.05 5.47619 0.63C6.44952 0.21 7.48952 0 8.59619 0C9.70286 0 10.7429 0.21 11.7162 0.63C12.6895 1.05 13.5362 1.62 14.2562 2.34C14.9762 3.06 15.5462 3.90667 15.9662 4.88C16.3862 5.85333 16.5962 6.89333 16.5962 8C16.5962 9.10667 16.3862 10.1467 15.9662 11.12C15.5462 12.0933 14.9762 12.94 14.2562 13.66C13.5362 14.38 12.6895 14.95 11.7162 15.37C10.7429 15.79 9.70286 16 8.59619 16ZM8.59619 14.4C10.3829 14.4 11.8962 13.78 13.1362 12.54C14.3762 11.3 14.9962 9.78667 14.9962 8C14.9962 6.21333 14.3762 4.7 13.1362 3.46C11.8962 2.22 10.3829 1.6 8.59619 1.6C6.80952 1.6 5.29619 2.22 4.05619 3.46C2.81619 4.7 2.19619 6.21333 2.19619 8C2.19619 9.78667 2.81619 11.3 4.05619 12.54C5.29619 13.78 6.80952 14.4 8.59619 14.4Z"
                                        fill="currentColor"></path>
                                </svg></div>
                            <div class="BG1f1e" v-if="selectTab !== 1"><svg height="100%" viewBox="0 0 14 12"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.59631 8.9057L1.46881 5.7782L0.403809 6.8357L4.59631 11.0282L13.5963 2.0282L12.5388 0.970703L4.59631 8.9057Z"
                                        fill="currentColor"></path>
                                </svg></div><span class="IDsIJ">Explore</span>
                        </div>
                    </div>

                </div>
                <div class="emoji-area" v-if="selectTab == 1">
                    <template v-for="(item, index) in categorys" :key="item.Name">
                        <div class="emoji-card" v-show="item?.list?.length">
                            <!-- 类别名称 -->
                            <div class="category-name" @click="item.close = !item.close">
                                <h3 class="fhHLCb">{{ emoji_categorys[item.Name] }}</h3>
                                <!-- 图标动画 -->
                                <div class="M56Ddf"
                                    :style="{ 'transform': !item.close ? 'rotate(0deg)' : 'rotate(180deg)' }">
                                    <svg height="100%" viewBox="0 -960 960 960" width="100%"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
                                            fill="currentColor">
                                        </path>
                                    </svg>
                                </div>
                            </div>

                            <!-- 使用 transition 包裹需要折叠和展开的部分 -->
                            <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <div class="emoji-list" v-show="!item.close">
                                    <span v-for="n in item.list " :key="n" class="Kn9Pyc" tabindex="0"
                                        @click="changeCurrentEmoji(n)" :aria-label="`Emoji ${n.Emoji}`"
                                        :class="{ 'p3R7o': isEmojiActive(n), 'odf2ff': isEmojiDisable(n) }">
                                        <NuxtImg format="webp" loading="lazy" class="BTLmpf" :src="emojiSvg(n.Emoji)"
                                            :alt="`emoji:${n.Emoji}`" />
                                    </span>
                                </div>
                            </transition>
                        </div>
                    </template>
                </div>

                <div class="explore-area" v-if="selectTab == 2">
                    <div class="expore-emojis" :key="leftEmoji.Id">
                        <template v-for="n in leftEmoji?.Pairs" :key="n.OtherEmojiId">
                            <div class="emoji-card loading" tabindex="0" @click="exploreCardClick(n, leftEmoji?.Pairs)"
                                :class="{ 'no-border': !n.show }">
                                <NuxtImg format="webp" loading="lazy" class="m004Dd" :src="getEmojiUrl(n)"
                                    @load="imageLoaded" :alt="`combine emoji`" />

                                <div class="emoji-card absolute" tabindex="0" v-show="n.show"
                                    :key="`${leftEmoji.Id}_${n.OtherEmojiId}`" :class="{ 'no-border': !n.show }">
                                    <div class="title" :style="{ opacity: n.show ? 1 : 0 }">
                                        <NuxtImg format="webp" loading="lazy" class="title-icon"
                                            :src="emojiSvg(leftEmoji.Emoji)" :alt="`left:${leftEmoji?.Emoji}`" />
                                        <span class="title-text">+</span>
                                        <NuxtImg format="webp" loading="lazy" class="title-icon" :src="getRightEmoji(n)"
                                            :alt="`right: ${n.OtherEmojiId}`" />
                                    </div>
                                    <NuxtImg format="webp" loading="lazy" class="m004Dd" :src="getEmojiUrl(n)"
                                        alt="combine emoji detail" />
                                    <div class="btns" :class="n.show && copied ? 'active' : ''"
                                        :style="{ opacity: n.show ? 1 : 0 }" @click.stop="copyExplore(n)">

                                        <template v-if="copied">
                                            <div class="ToU0Lb CsKMsb green"><svg height="100%" viewBox="0 0 14 12"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.59631 8.9057L1.46881 5.7782L0.403809 6.8357L4.59631 11.0282L13.5963 2.0282L12.5388 0.970703L4.59631 8.9057Z"
                                                        fill="currentColor"></path>
                                                </svg></div>
                                            <span class="t6NJlf green">Copied</span>
                                        </template>
                                        <div v-else-if="isCoping" class="loader2"></div>
                                        <div v-else-if="copyErr" class="red">Copied</div>
                                        <template v-else>
                                            <div class="ToU0Lb LI9V2b"><svg height="100%" viewBox="0 0 12 14"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.05882 14C0.776471 14 0.529412 13.895 0.317647 13.685C0.105882 13.475 0 13.23 0 12.95V2.3975H1.05882V12.95H9.42353V14H1.05882ZM3.17647 11.9C2.89412 11.9 2.64706 11.795 2.43529 11.585C2.22353 11.375 2.11765 11.13 2.11765 10.85V1.05C2.11765 0.77 2.22353 0.525 2.43529 0.315C2.64706 0.105 2.89412 0 3.17647 0H10.9412C11.2235 0 11.4706 0.105 11.6824 0.315C11.8941 0.525 12 0.77 12 1.05V10.85C12 11.13 11.8941 11.375 11.6824 11.585C11.4706 11.795 11.2235 11.9 10.9412 11.9H3.17647ZM3.17647 10.85H10.9412V1.05H3.17647V10.85Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <span class="t6NJlf">Copy</span>
                                        </template>
                                    </div>

                                </div>

                            </div>

                        </template>


                    </div>
                    <div class="explore-select">
                        <div class="explore-list">

                            <template v-for="(item, index) in categorys" :key="item.Name">
                                <div class="emoji-card" v-show="item?.list?.length">
                                    <!-- 类别名称 -->
                                    <div class="category-name" @click="item.close = !item.close">
                                        <h3 class="fhHLCb">{{ emoji_categorys[item.Name] }}</h3>
                                        <!-- 图标动画 -->
                                        <div class="M56Ddf"
                                            :style="{ 'transform': !item.close ? 'rotate(0deg)' : 'rotate(180deg)' }">
                                            <svg height="100%" viewBox="0 -960 960 960" width="100%"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
                                                    fill="currentColor">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>

                                    <!-- 使用 transition 包裹需要折叠和展开的部分 -->
                                    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                        <div class="emoji-list" v-show="!item.close">
                                            <span v-for="n in item.list " :key="n" class="Kn9Pyc" tabindex="0"
                                                @click="leftEmoji = n" :aria-label="`Emoji ${n.Emoji}`"
                                                :class="{ 'p3R7o': leftEmoji.Id == n.Id }">
                                                <NuxtImg format="webp" loading="lazy" class="BTLmpf"
                                                    :src="emojiSvg(n.Emoji)" :alt="`emoji ${n.Emoji}`" />
                                            </span>
                                        </div>
                                    </transition>
                                </div>
                            </template>
                        </div>

                    </div>

                </div>

                <div class="loader-area" v-show="loading">
                    <div class="loader big"></div>
                </div>
            </div>
        </section>
        <footer class="footer" id="footer">
            <div class="container">
                <div class="footer__wrapper">
                    <div>
                        <div class="footer__inner">
                            <picture class="footer__logotype">
                                <NuxtImg format="webp" loading="lazy" src="/logo/192x192.png" alt="'Emoji Kitchen'"
                                    width="32px" height="32px" />
                            </picture>
                            <p class="footer__copyright">
                                ©
                                {{
                                    currentYear
                                }} EmojiKitchen, Inc.
                                <span style="padding: 0 5px;">
                                    Powered by
                                    <a href="https://emojikitchen.net" target="_blank">emojikitchen.net</a>
                                </span>
                            </p>
                        </div>
                    </div>

                    <ul class="footer__list">
                        <li class="footer__item">
                            <a href="mailto:support@emojikitchen.net?subject=Emoji Kitchen"
                                class="footer__link">Feedback</a>
                        </li>
                        <li class="footer__item">
                            <a href="https://github.com/NeuralShard/emojikitchen.git" target="_blank"
                                class="footer__link">
                                Source Code
                            </a>
                        </li>

                    </ul>

                </div>


            </div>
        </footer>
    </div>
</template>
<script lang="ts" setup>
import EmojiJson from '../config/metadata.json';
const emojis = ref()
const categorys = ref()
const emoji_categorys = {
    "Smileys and emotions": "Smileys and emotions",
    "People": "People",
    "Animals and nature": "Animals and nature",
    "Food and drink": "Food and drink",
    "Travel and places": "Travel and places",
    "Activities and events": "Activities and events",
    "Objects": "Objects",
    "Symbols": "Symbols"
} as any

const currentYear = new Date().getFullYear();

const selectTab = ref(1)
const changeTab = (val: number) => {
    if (val == 2) {
        if (!leftEmoji.value) {
            leftEmoji.value = emojis.value[0]
        }
    } else {
        clearAll()
    }
    selectTab.value = val
}

const selectEmojiType = ref(1)
const changeSelectEmoji = (val: number) => {
    selectEmojiType.value = val
}

const loading = ref<boolean>(true)

const leftEmoji = ref()
const rightEmoji = ref()
const defaultResult = {
    img: '',
    loading: false
}
const resultEmoji = ref({ ...defaultResult })


const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.value.length)
    return emojis.value[randomIndex]
}

const leftRandom = () => {
    changeSelectEmoji(1)
    if (rightEmoji.value) {
        const randomIndex = Math.floor(Math.random() * rightEmoji.value.Pairs.length)
        const id = rightEmoji.value.Pairs[randomIndex].OtherEmojiId
        leftEmoji.value = emojis.value.find((item: any) => item.Id === id)
    } else {
        leftEmoji.value = getRandomEmoji()
    }
    doCombine()
}

const rightRandom = () => {
    changeSelectEmoji(2)
    if (leftEmoji.value) {
        const randomIndex = Math.floor(Math.random() * leftEmoji.value.Pairs.length)
        const id = leftEmoji.value.Pairs[randomIndex].OtherEmojiId
        rightEmoji.value = emojis.value.find((item: any) => item.Id === id)
    }
    else {
        rightEmoji.value = getRandomEmoji()
    }
    doCombine()
}


const doCombine = () => {
    if (!leftEmoji.value || !rightEmoji.value) {
        return
    }
    resultEmoji.value.img = ''
    resultEmoji.value.loading = true
    const leftcode = getCodePoint(leftEmoji.value.Emoji, 'u')
    const rightcode = getCodePoint(rightEmoji.value.Emoji, 'u')
    const mix = selectEmojiType.value == 2 ? leftEmoji.value.Pairs.find((item: any) => item.OtherEmojiId == rightEmoji.value.Id) : rightEmoji.value.Pairs.find((item: any) => item.OtherEmojiId == leftEmoji.value.Id)
    if (mix) {
        let firstCode = selectEmojiType.value == 2 ? leftcode : rightcode
        let secondCode = selectEmojiType.value == 2 ? rightcode : leftcode
        if (mix?.isCover) {
            [firstCode, secondCode] = [secondCode, firstCode]
        }
        //https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f62c/u1f62c_u1f339.png
        //https://www.gstatic.com/android/keyboard/emojikitchen/20241021/u1f329-ufe0f/u1f329-ufe0f_u1f198.png?fbx
        resultEmoji.value.img = `https://www.gstatic.com/android/keyboard/emojikitchen/${getDateFromOffset(mix?.DateOffset)}/${firstCode}/${firstCode}_${secondCode}.png`
    } else {
        resultEmoji.value.img = ''
    }
    resultEmoji.value.loading = false
    // console.log(leftEmoji.value)
    // console.log(emojis.value[3])
}
const getRightEmoji = (mix: any) => {
    return emojiSvg(emojis.value.find((item: any) => item.Id === mix.OtherEmojiId)?.Emoji)
}

const getEmojiUrl = (mix: any) => {
    const leftcode = getCodePoint(leftEmoji.value.Emoji, 'u')
    const right = emojis.value.find((item: any) => item.Id === mix.OtherEmojiId)

    if (right) {
        const rightcode = getCodePoint(right.Emoji, 'u')
        let firstCode = leftcode
        let secondCode = rightcode
        if (mix?.isCover) {
            [firstCode, secondCode] = [secondCode, firstCode]
        }
        return `https://www.gstatic.com/android/keyboard/emojikitchen/${getDateFromOffset(mix?.DateOffset)}/${firstCode}/${firstCode}_${secondCode}.png`
    }
    return ''

}

function getDateFromOffset(dateOffset: number) {
    // 设置起始日期为 2020-01-01
    const startDate = new Date('2020-01-01');

    // 使用 setDate 方法来增加天数（根据 dateOffset）
    startDate.setDate(startDate.getDate() + dateOffset);

    // 获取年份、月份、日期，并确保它们是两位数（如果需要的话）
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, '0'); // getMonth() 返回的是 0-11 所以需要加 1
    const day = String(startDate.getDate()).padStart(2, '0');

    // 返回格式化后的日期
    return `${year}${month}${day}`;
}

function getCodePoint(emoji: any, ucode = 'u', split = '-') {
    const unicodeCodePoints = [...emoji].map(char => ucode + char.codePointAt(0).toString(16))
    return unicodeCodePoints.join(split)
}



const emojiSvg = (code: any) => {
    return `https://fonts.gstatic.com/s/e/notoemoji/latest/${getCodePoint(code, '', '_')}/emoji.svg`;
}

const clearAll = () => {
    clearCopy()
    resultEmoji.value = { ...defaultResult }
    leftEmoji.value = null
    rightEmoji.value = null
    selectEmojiType.value = 1
}

const doRandom = () => {
    leftRandom()
    rightRandom()
    // console.log('left:', leftEmoji.value)
    // console.log('right:', rightEmoji.value)
}

function beforeEnter(el: any) {
    el.style.height = 0; // 设置元素初始高度为 0
    el.style.transition = 'height 0.3s ease-out'; // 设置过渡动画
}
// 动画执行过程
function enter(el: any) {
    el.offsetHeight; // 强制重排以启动动画
    el.style.height = `${el.scrollHeight}px`; // 设置展开后的高度
}
// 动画离开的操作
function leave(el: any) {
    el.style.height = 0; // 设置收起时的高度
}

const isEmojiActive = (n: any) => {
    if (!n?.Id) {
        return false
    }
    if (selectEmojiType.value == 1) {
        return leftEmoji.value?.Id === n.Id
    } else {
        return rightEmoji.value?.Id === n.Id
    }
}

const isEmojiDisable = (n: any) => {
    if (selectEmojiType.value == 1) {
        if (!rightEmoji.value) {
            return false
        } else {
            return !rightEmoji.value?.Pairs?.some((item: any) => item.OtherEmojiId === n.Id)
        }
    } else {
        if (!leftEmoji.value) {
            return false
        } else {
            return !leftEmoji.value?.Pairs?.some((item: any) => item.OtherEmojiId === n.Id)
        }
    }
}

const changeCurrentEmoji = (n: any) => {
    if (isEmojiDisable(n)) {
        return
    }
    if (selectEmojiType.value == 1) {
        leftEmoji.value = n
        if (!rightEmoji.value) {
            changeSelectEmoji(2)
        }
    } else {
        rightEmoji.value = n
        if (!leftEmoji.value) {
            changeSelectEmoji(1)
        }
    }
    doCombine()
}

const copied = ref(false)
const isCoping = ref(false)
const copyErr = ref(false)
let copyTimer: any = null
const copyContent = async (data: any) => {
    try {
        if (copied.value || isCoping.value || copyErr.value || !data) {
            return
        }
        isCoping.value = true
        copyErr.value = false

        // 设置超时时间
        const timeout = 30000;
        copyTimer = setTimeout(() => {
            console.error('copy timeout')
            copyErrFunc()
        }, timeout);

        const response = await fetch(data);
        if (response.ok) {
            const blob = await response.blob();
            const imageClipboardItem = new ClipboardItem({
                'image/png': blob,  // 设置图像的 MIME 类型为 image/png
            });
            // 使用 Clipboard API 复制内容
            navigator.clipboard.write([imageClipboardItem]).then(() => {
                // 设置状态为复制成功
                copied.value = true;

                // 2秒后隐藏复制成功提示
                setTimeout(() => {
                    copied.value = false;
                }, 2000);
            }).catch(err => {
                console.error('复制失败', err);
                copyErrFunc()
            }).finally(() => {
                isCoping.value = false
                clearTimeout(copyTimer)
            });
        } else {
            console.error('复制失败', '下载图片失败');
            copyErrFunc()
        }
    } catch (ex) {
        console.error('复制失败', ex);
        copyErrFunc()
    }

}

const copyErrFunc = () => {
    copyErr.value = true
    setTimeout(() => {
        copyErr.value = false;
    }, 2000);
    clearTimeout(copyTimer)
}
const clearCopy = () => {
    copyErr.value = false
    isCoping.value = false
    copied.value = false
}

const exploreCardClick = (n: any, list: any) => {
    console.log('exploreCardClick', n)
    clearCopy()
    if (n.show) {
        return
    } else {
        list.forEach((element: any) => {
            element.show = false
        });
        n.show = true
    }

}

const copyExplore = (n: any) => {
    if (!n.show) {
        return
    }
    copyContent(getEmojiUrl(n))
}

const init = () => {
    try {
        loading.value = true
        loadEmojis()
    } catch (ex) {
        console.error(ex)
    } finally {
        loading.value = false
    }

}





const loadEmojis = () => {
    try {
        emojis.value = getNextEmojiList(EmojiJson.Emojis);
        categorys.value = getCategoryList(EmojiJson.Categories);
        //
        doRandom()

    } catch (error) {
        console.error('Error loading emoji data:', error);
    }
};
const getNextEmojiList = (list: any) => {
    if (!list?.length) {
        return []
    }
    const res = [] as any[]
    list.forEach((element: any) => {
        const mix = [...element.Pairs]
        list.forEach((current: any) => {
            const left = current.Pairs.find((item: any) => item.OtherEmojiId == element.Id && !item.isCover)
            if (left) {
                mix.push({
                    rightId: current.Id,
                    dateOffset: left.DateOffset,
                    isCover: true,
                })
            }
        })
        const data = Object.assign({}, element, { mix: mix })
        res.push(data)
    })
    return res
}


const getCategoryList = (list: any) => {
    if (!list?.length) {
        return []
    }
    const res = [] as any[]
    for (let i = 0; i < list.length; i++) {
        const currentIndex = list[i].Id
        const nextIndex = list[i + 1]?.Id || Infinity
        const emojisList = emojis.value.filter((item: any) => item.Id >= currentIndex && item.Id < nextIndex)
        res.push(Object.assign({}, list[i], { list: emojisList }))
    }
    return res
}

// 图片加载完成后显示图片，隐藏loading文本
function imageLoaded(imgElement: any) {
    const container = imgElement.target.parentNode
    container.classList.remove('loading');
}
init()
</script>
<style lang="scss" scoped>
@import url(../assets/css/game.scss);
</style>
