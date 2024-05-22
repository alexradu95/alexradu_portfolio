<script>
    import App from "$lib/components/application/App.svelte";
</script>

<App title="ChatApp">
    <div class="modal">
        <div class="flex flex-col flex-grow">
            <header class="bg-gray-800 text-white text-center py-4">
                <h1 class="text-3xl font-bold">Chat Interface</h1>
            </header>
            <main class="flex flex-col flex-grow p-4 bg-gray-900">
                <div id="chatui" class="flex flex-col flex-grow bg-gray-800 shadow-md rounded-lg overflow-hidden">
                    <div id="chatui-select-wrapper" class="p-2 bg-gray-700">
                        <select id="chatui-select" class="w-full p-2 rounded-md bg-gray-600 text-white"></select>
                    </div>
                    <div id="chatui-chat" class="flex-grow p-4 overflow-y-auto bg-gray-800 text-white"></div>
                    <div id="chatui-inputarea" class="p-2 bg-gray-700 flex">
                        <input id="chatui-input" type="text" placeholder="Enter your message..." class="flex-grow p-2 rounded-l-md border border-gray-600 bg-gray-600 text-white focus:outline-none">
                        <button id="chatui-send-btn" class="bg-blue-500 text-white p-2 rounded-r-md transition duration-200 ease-in-out transform active:bg-blue-700 active:scale-95">📩</button>
                        <button id="chatui-reset-btn" class="bg-red-500 text-white p-2 ml-2 rounded-md transition duration-200 ease-in-out transform active:bg-red-700 active:scale-95">🚚</button>
                    </div>
                </div>
                <div id="chatui-extra-control" class="mt-2 text-center">
                    <label id="chatui-info-label" class="text-gray-400"></label>
                </div>
            </main>
        </div>
    </div>
</App>

