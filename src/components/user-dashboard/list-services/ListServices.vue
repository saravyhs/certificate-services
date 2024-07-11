<!-- create by pharen -->
<template>
  <div class="container">
    <div class="page-inner">
      <div class="card card-round mt-3">
        <div class="card-body">
          <!-- <div class=able-responsive"> -->
          <div class="table-responsive">
            <table class="table table-dark-gray align-middle table-hover p-1">
              <thead>
                <tr>
                  <th class="head-font fw-bold">ល.រ</th>
                  <th class="head-font fw-bold" style="white-space: nowrap">
                    លេខបង្កាន់ដៃ
                  </th>
                  <th class="head-font fw-bold" style="white-space: nowrap">
                    ឈ្មោះ
                  </th>
                  <th class="head-font fw-bold" style="white-space: nowrap">
                    ប្រភេទសេវា
                  </th>
                  <th class="head-font fw-bold" style="white-space: nowrap">
                    កាលបរិច្ឆេទ
                  </th>
                  <th class="head-font fw-bold" style="white-space: nowrap">
                    សកម្មភាព
                  </th>
                  <th class="head-font fw-bold" style="white-space: nowrap">
                    ស្ថានភាព
                  </th>
                  <th class="head-font fw-bold" style="white-space: nowrap">
                    បោះពុម្ភ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in joinedData" :key="index">
                  <td style="white-space: nowrap">1</td>
                  <td style="white-space: nowrap">001</td>
                  <td style="white-space: nowrap">{{ item.name }}</td>
                  <td style="white-space: nowrap">
                    <span v-if="item.desc === 'verify'"
                      >បញ្ជាក់ភាពត្រឹមត្រូវ</span
                    >
                    <span v-else-if="item.desc === 'reissue'">ទុតិយតា</span>
                    <span v-else-if="item.desc === 'edit'">កែតម្រូវ</span>
                  </td>
                  <td style="white-space: nowrap">{{ item.create_date }}</td>
                  <td>
                    <span
                      v-if="item.status === '1'"
                      class="badge bg-primary p-2"
                      style="width: 6rem"
                      >ដាក់ពាក្យ</span
                    >
                    <span
                      v-else-if="item.status === '2'"
                      class="badge bg-danger p-2"
                      style="width: 6rem"
                      >កំពុងធ្វើ</span
                    >
                    <span
                      v-else-if="item.status === '3'"
                      class="badge bg-success p-2"
                      style="width: 6rem"
                      >រួចរាល់</span
                    >
                  </td>
                  <td style="white-space: nowrap">
                    <!-- <div class="container"> -->
                    <router-link to="/user-dashboard/view-service">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        <span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            height="1em"
                          >
                            <path
                              d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                            ></path></svg
                        ></span></button
                      ><span class="m-2"></span>
                    </router-link>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="1em"
                        >
                          <path
                            d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                          ></path></svg
                      ></span></button
                    ><span class="m-2"></span
                    ><button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="1em"
                        >
                          <path
                            d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                          ></path></svg
                      ></span>
                    </button>
                    <!-- </div> -->
                  </td>
                  <td>
                    <button
                      type="button"
                      @click="printInvoice(item)"
                      name="btnprint"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="1em"
                        >
                          <path
                            d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                          ></path></svg
                      ></span>
                    </button>
                  </td>
                </tr>
                <!-- start row2 -->
                <!-- <tr>
                  <td>2</td>
                  <td>002</td>
                  <td>ចក់ ផារ៉េន</td>
                  <td>កែតម្រូវ</td>
                  <td>01/10/2023</td>
                  <td>
                    <span class="badge bg-primary p-2" style="width: 6rem"
                      >កំពុងដំណើរការ</span
                    >
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          height="1em"
                        >
                          <path
                            d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                          ></path></svg
                      ></span></button
                    ><span class="m-2"></span
                    ><button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="1em"
                        >
                          <path
                            d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                          ></path></svg
                      ></span></button
                    ><span class="m-2"></span
                    ><button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="1em"
                        >
                          <path
                            d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                          ></path></svg
                      ></span>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="1em"
                        >
                          <path
                            d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                          ></path></svg
                      ></span>
                    </button>
                  </td>
                </tr> -->
                <!-- start row3 -->
                <!-- <tr>
                  <td>3</td>
                  <td>003</td>
                  <td>ហែម ពិសិដ្ឋ</td>
                  <td>ទុតិយតា</td>
                  <td>01/10/2024</td>
                  <td>
                    <span class="badge bg-danger p-2" style="width: 6rem"
                      >ដាក់ពាក្យ</span
                    >
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          height="1em"
                        >
                          <path
                            d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                          ></path></svg
                      ></span></button
                    ><span class="m-2"></span
                    ><button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="1em"
                        >
                          <path
                            d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                          ></path></svg
                      ></span></button
                    ><span class="m-2"></span
                    ><button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="1em"
                        >
                          <path
                            d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                          ></path></svg
                      ></span>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="1em"
                        >
                          <path
                            d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                          ></path></svg
                      ></span>
                    </button>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

import { useApplicantStore } from "@/store/applicantStore.js";
import { mapState, mapActions, storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import { formatKhmerNum, formatKhmerMonth } from "@/utils/khmerUtils"; // Adjust path as per your project structure
const applicantStore = useApplicantStore();
const { joinedData } = storeToRefs(applicantStore);
onMounted(() => {
  applicantStore.fetchApplicant(); // Trigger fetching data on mount
});
const formatDOB = (dob) => {
  if (!dob) return ""; // Handle case where DOB is not available

  const date = new Date(dob);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
  return formattedDate;
};
function showData() {
  router.push("/invoice/print", "");
}

const printInvoice = async (data) => {
  switch (data.desc) {
    case "reissue":
      await router.push({
        name: "printinvoice",
        params: {
          id: data.id, // Assuming each item has an id
          itemData: JSON.stringify(data),
        },
      });
      break;
    case "verify":
      await router.push({
        name: "verifyreport",
        params: {
          id: data.id, // Assuming each item has an id
          itemData: JSON.stringify(data),
        },
      });
      break;
    case "edit":
      await router.push({
        name: "editreport",
        params: {
          id: data.id, // Assuming each item has an id
          itemData: JSON.stringify(data),
        },
      });
      break;
  }
};
</script>

<style scoped>
table,
tr,
td,
th {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}

.head-font {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
</style>
