<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <button type="button" class="btn btn-outline-light">Logout</button>
            </div>
        </div>
    </nav>

    <div class="body-wrapper">

        <div class="d-grid card-wrapper">
            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Create
                Task</button>
        </div>

        <div class="card border-dark card-wrapper">
            <h5 class="card-header">
                todo
            </h5>
            <div class="card-body">
                <label for="customRange3" class="form-label">0%</label>
                <input type="range" class="form-range" min="0" max="10" step="1" id="customRange3" value="0">
                <p class="card-text">
                    abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-outline-dark" type="button" data-bs-toggle="modal"
                        data-bs-target="#exampleModalEdit">Edit</button>
                    <button class="btn btn-outline-danger" type="button" data-bs-toggle="modal"
                        data-bs-target="#exampleModalDelete">Delete</button>
                </div>
            </div>
        </div>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Create task</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Title</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Leave a comment here"
                                id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Content</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-secondary">Create</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"
                                value="todo">
                            <label for="floatingInput">Title</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Leave a comment here"
                                id="floatingTextarea">abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345abcdefg12345</textarea>
                            <label for="floatingTextarea">Content</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-secondary">Edit</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalDelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Delete</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Delete?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.body-wrapper {
    margin: 0 20%;
}

.card-wrapper {
    margin: 5% 0;
}
</style>