
<?php
// Conexão com o banco de dados MySQL
$servername = "localhost"; // Endereço do servidor
$username = "root";        // Usuário do banco de dados
$password = "";            // Senha do banco de dados
$dbname = "techstore";     // Nome do banco de dados

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Obtém e sanitiza os valores enviados pelo formulário
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : '';

// Prepara a instrução SQL para inserir os dados
$stmt = $conn->prepare("INSERT INTO solicitacoes (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);

// Executa a inserção
if ($stmt->execute()) {
    // Exibe a página de sucesso
    echo "Cadastro realizado com sucesso!";
    header("refresh:4;url=index.html");
} else {
    echo "Erro ao inserir os dados: " . $stmt->error;
}

// Fecha a declaração e a conexão
$stmt->close();
$conn->close();
?>
