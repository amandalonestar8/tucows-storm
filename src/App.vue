<template>
  <div>
    <Navbar @search="handleSearch" />
    <p><strong>Products</strong> <small class="text-grey">{{ filteredProducts.length }} of {{ products.length }}
        results</small></p>
    <Table :products="filteredProducts" :headers="headers" @rowClicked="handleRowClick" />
    <Modal :visible="showModal" @close="showModal = false" :modal-header="selectedRow ? selectedRow.product : ''">
      <div>
        <div>
          <img v-if="selectedRow.image" :src="selectedRow.image" :alt="selectedRow.product">
          <div v-else class="no-image bg-purple text-purple">No image</div>
        </div>
        <div>
          <p>Key Features</p> 
          <ul>
            <li>2.6 GHz Intel Core i7 6-Core (9th Gen)</li>
            <li>16GB of 2666 MHz DDR4 RAM | 8TB SSD</li>
            <li>16" 3072 x 1920 Retina Display</li>
            <li>AMD Radeon Pro 5600M GPU (8GB HBM2)</li>
          </ul>
          <p>The Apple 16" MacBook Pro features a 16" Retina Display,
          a Magic Keyboard with a redesigned scissor mechanism, a six-speaker high-fidelity sound system, and an
          advanced thermal design. This MacBook Pro also features an AMD Radeon Pro 5600M graphics card, a 7nm mobile
          discrete GPU designed for pro users. With 8GB of HBM2</p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";
import products from "@/data/products.json";
import headers from "@/constants/tableColumns.ts"

export default {
  components: {
    Table,
    Navbar,
    Modal,
  },
  data() {
    return {
      products,
      headers,
      showModal: false,
      selectedRow: null,
      searchText: '',
    };
  },
  computed: {
    filteredProducts() {
      if (!this.searchText) {
        return this.products; //returns original product list
      }
      const searchValue = this.searchText.toLowerCase();
      return this.products.filter(product =>
        product.product.toLowerCase().includes(searchValue) || product.serial.toLowerCase().includes(searchValue) || product.id.toString().toLowerCase().includes(searchValue)
      );
    },
  },
  methods: {
    handleRowClick(row) {
      this.selectedRow = row;
      this.showModal = true;
    },
    handleSearch(text) {
      this.searchText = typeof text === 'string' ? text : '';
    },
  }
};
</script>