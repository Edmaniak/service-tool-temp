<template>
  <div
    :id="id"
    :class="{'modal--scrollable': scrollable}"
  >
    <div
      class="modal-overlay"
      @click="closeModal(id)"
    />
    <div class="modal__scroll">
      <div class="modal">
        <div class="modal__header">
          <div>
            <h3
              v-if="header"
              class="modal__title"
            >
              {{ header }}
            </h3>
          </div>
          <div>
            <div
              class="modal__close color-primary-hover-svg"
              @click="closeModal(id)"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill-opacity="0.7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.06 6L11.78 1.28C11.92 1.14 12 0.95 12 0.75C12 0.34 11.66 0 11.25 0C11.05 0 10.86 0.0800002 10.72 0.22L6 4.94L1.28 0.22C1.14 0.0800002 0.96 0 0.75 0C0.34 0 0 0.34 0 0.75C0 0.95 0.09 1.14 0.22 1.28L4.94 6L0.22 10.72C0.09 10.86 0 11.04 0 11.25C0 11.66 0.34 12 0.75 12C0.96 12 1.14 11.91 1.28 11.78L6 7.06L10.72 11.78C10.86 11.91 11.05 12 11.25 12C11.66 12 12 11.66 12 11.25C12 11.04 11.92 10.86 11.78 10.72L7.06 6Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <slot :data="data" />
        <div
          v-if="!!$slots['footer']"
          class="modal__footer"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, ref} from 'vue';
import {eventHub, closeModal} from '@/utils/Utils';
import Events from '@/enums/Events';
import {ResizeSensor} from 'css-element-queries';
import {useStore} from 'vuex';
import {Mutations} from '@/store';

export default defineComponent({
  name: 'VModal',
  props: {
    header: {
      type: String,
    },
    id: {
      type: String,
      required: true
    },
    action: {
      type: Function,
    }
  },
  emits: ['close', 'open'],
  setup (props, {emit}) {

    const store = useStore()
    const data = ref<any>(null)
    const scrollable = ref<boolean>(false)
    let resizeListenerFn: any
    let escapeListenerFn: any
    let enterListenerFn: any

    onMounted(() => {

      const modalElement = document.querySelector(`#${props.id} .modal`)!

      resizeListenerFn = () => {
        scrollable.value = modalElement.clientHeight >= window.innerHeight
      }

      escapeListenerFn = (e: any) => {
        if (e.key === 'Escape') closeModal(props.id)
      }

      enterListenerFn = (e: any) => {
        if (e.key === 'Enter' && props.action) props.action()
      }

      document.querySelector('html')!.style.overflow = 'hidden'

      eventHub.$on(Events.CLOSE_MODAL, (id: string) => {
        if (props.id === id) {
          document.querySelector('html')!.style.overflow = 'auto'
          store.commit(Mutations.REMOVE_ACTIVE_MODAL, props.id)
          emit('close')
        }
      })

      new ResizeSensor(modalElement, resizeListenerFn)
      window.addEventListener('resize', resizeListenerFn)
      document.addEventListener('keydown', escapeListenerFn)
      document.addEventListener('keydown', enterListenerFn)
      emit('open')
    })


    onUnmounted(() => {
      window.removeEventListener('resize', resizeListenerFn)
      document.removeEventListener('keydown', escapeListenerFn)
      document.removeEventListener('keydown', enterListenerFn)
    })

    return {closeModal, data, scrollable}
  }
})
</script>
<style scoped lang="scss">
@import "../../assets/scss/variables";

.modal-overlay {
  cursor: pointer;
  width: 10000vw;
  left: -50vw;
  position: fixed;
  height: 10000vh;
  z-index: 500;
  top: -50vh;
  background: rgba(0, 0, 0, 0.2);
}

.modal {
  border-radius: 6px;
  background: #FFF;
  min-height: 5px; // testing purposes
  &__scroll {
    transform: translate(-50%, -50%);
    z-index: 501;
    max-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 50%;
    box-shadow: 0px 10px 20px rgba(32, 37, 38, 0.1), 0px 20px 50px rgba(32, 37, 38, 0.1);
  }

  &--scrollable {
    .modal__scroll {
      overflow-x: hidden;
      overflow-y: auto;
      top: 0;
      align-items: flex-start;
      transform: translate(-50%, 0);
    }

    .modal {
      border-radius: 0;
    }
  }

  &__header {
    background: #FFFFFF;
    padding: 1.9rem 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:after {
      content: "";
      left: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &__title {
    color: #3F575C;
    font-weight: 600;
    font-size: 22px;
    line-height: 140%;
  }

  &__close {
    cursor: pointer;

    svg {
      fill: #1D1C1D;
      transition: all 0.1s;
    }
  }

  &__body {
    background: #fff;
  }

  &__footer {
    background: $creme;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2.4rem 3.2rem;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  @media (max-width: 900px) {
    &__scroll {
      top: 0;
      align-items: flex-start;
      transform: translate(-50%, 0);
    }

    border-radius: 0;
    &__header, &__footer {
      border-radius: 0;
    }
  }
}
</style>