<template>
  <VModal
      :id="Modals.ADD_NEW_UNIT_MODAL"
      :header="$t('addNewUnitModal.addNewUnit')"
  >
    <div class="add-new-unit-modal">
      <h2 class="add-new-unit-modal__header">
        {{ $t('addNewUnitModal.header') }}
      </h2>
      <p class="add-new-unit-modal__text">
        {{ $t('addNewUnitModal.text') }}
      </p>
      <div class="add-new-unit-modal__options">
        <div class="add-new-unit-modal__option">
          <img :alt="$t('addNewUnitModal.lan')" class="add-new-unit-modal__option-icon" src="../../assets/img/icons/lan.svg"/>
          <div class="add-new-unit-modal__option-title">
            {{ $t('addNewUnitModal.lan') }}
          </div>
        </div>
        <div class="add-new-unit-modal__option">
          <img :alt="$t('addNewUnitModal.qr')" src="../../assets/img/icons/qr.svg" class="add-new-unit-modal__option-icon"/>
          <div class="add-new-unit-modal__option-title">
            {{ $t('addNewUnitModal.qr') }}
          </div>
        </div>
        <div class="add-new-unit-modal__option">
          <img :alt="$t('addNewUnitModal.serial')" src="../../assets/img/icons/serial.svg" class="add-new-unit-modal__option-icon"/>
          <div class="add-new-unit-modal__option-title">
            {{ $t('addNewUnitModal.serial') }}
          </div>
        </div>
        <div class="add-new-unit-modal__option">
          <img :alt="$t('addNewUnitModal.cloud')" src="../../assets/img/icons/cloud.svg" class="add-new-unit-modal__option-icon"/>
          <div class="add-new-unit-modal__option-title">
            {{ $t('addNewUnitModal.cloud') }}
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex content-end">
        <VButton
            class="mr-10 button--secondary"
            @click="closeModal(Modals.ADD_NEW_UNIT_MODAL)"
        >
          {{ $t('general.cancel') }}
        </VButton>
        <VButton
            id="create-schedule-modal-btn"
            class="button--primary"
            @click="save"
        >
          {{ $t('general.save') }}
        </VButton>
      </div>
    </template>
  </VModal>
</template>

<script lang="ts">
import VModal from '@/components/modals/VModal.vue';
import {defineComponent, ref} from 'vue';
import Modals from '@/enums/Modals';
import VButton from '@/components/controls/VButton.vue';
import {closeModal} from '@/utils/Utils';
import {useI18n} from 'vue-i18n';
import FormError from '@/components/controls/FormError.vue';

export default defineComponent({
  name: 'AddNewUnitModal',
  components: {FormError, VButton, VModal},
  setup (props) {
    const {t} = useI18n()


    return {Modals, closeModal}
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.add-new-unit-modal {
  min-width: 900px;
  text-align: center;
  min-height: 541px;
  display: flex;
  flex-direction: column;
  padding-top: 76px;
  align-items: center;

  &__header {
    font-weight: 600;
    font-size: 26px;
    line-height: 140%;
    color: $dark-blue;
    margin-bottom: 17px;
  }

  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 165%;
    max-width: 463px;
    color: $neutral;
  }

  &__options {
    display: flex;
    margin-top: 51px;
  }

  &__option {
    width: 160px;
    cursor: pointer;
    height: 200px;
    margin: 0 15px;
    color: #556981;
    display: flex;
    flex-direction: column;
    line-height: 140%;
    align-items: center;
    justify-content: center;
    border: 1px solid $light-gray;

    &-icon {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 600px) {
    min-width: 100vw;
  }
}
</style>