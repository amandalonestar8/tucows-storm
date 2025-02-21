<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="(column, index) in headers" :key="index" @click="column.sortable && sortBy(column.key)"
                        :class="{ sortable: column.sortable, active: sortColumn === column.key }">
                        {{ column.label }}
                        <span v-if="column.sortable && sortColumn === column.key">
                            <img v-if="sortDirection === 'asc'" src="/src/assets/down.svg" alt="asc list" class="asc">
                            <img v-else-if="sortDirection === 'desc'" src="/src/assets/down.svg" alt="desc list" class="desc">
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr tabindex="0" v-for="(row, rowIndex) in sortedProducts" :key="rowIndex"
                    @click="$emit('rowClicked', row)">
                    <td v-for="(column, colIndex) in headers" :key="colIndex">
                        <span v-if="column.render" v-html="column.render(row)"></span>
                        <span v-else>{{ row[column.key] }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true,
        },
        headers: Array
    },
    data() {
        return {
            sortColumn: null,
            sortDirection: 'asc',
        }
    },
    computed: {
        sortedProducts() {
            // no sorting - sortColumn = null
            if (!this.sortColumn) {
                return this.products;
            }
            // make new array
            return [...this.products].sort((a, b) => {
                let aVal = a[this.sortColumn];
                let bVal = b[this.sortColumn];

                // numbers
                if (typeof aVal === 'number' && typeof bVal === 'number') {
                    return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
                } else {
                    // strings and sort alphabetically
                    aVal = aVal ? aVal.toString().toLowerCase() : '';
                    bVal = bVal ? bVal.toString().toLowerCase() : '';
                    if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
                    if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
                    return 0;
                }
            });
        },
    },
    methods: {
        sortBy(columnKey) {
            if (this.sortColumn === columnKey) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortColumn = columnKey;
                this.sortDirection = 'asc';
            }
        },
    },
};
</script>