import matplotlib.pyplot as plt
import networkx as nx

# Create a directed graph
G = nx.DiGraph()

# Add nodes (variables)
G.add_node("Cultivation Status", type="Independent Variable")
G.add_node("Social Factors", type="Independent Variable")
G.add_node("Economic Factors", type="Independent Variable")
G.add_node("Policy & Government Support", type="Intervening Variable")
G.add_node("Infrastructure Development", type="Intervening Variable")
G.add_node("Access to Credit & Financial Services", type="Intervening Variable")
G.add_node("Technology & Knowledge Transfer", type="Intervening Variable")
G.add_node("Commercialization of Moringa Oleifera", type="Dependent Variable")

# Add edges (relationships)
G.add_edge("Cultivation Status", "Policy & Government Support")
G.add_edge("Cultivation Status", "Infrastructure Development")
G.add_edge("Cultivation Status", "Access to Credit & Financial Services")
G.add_edge("Cultivation Status", "Technology & Knowledge Transfer")

G.add_edge("Social Factors", "Policy & Government Support")
G.add_edge("Social Factors", "Infrastructure Development")
G.add_edge("Social Factors", "Access to Credit & Financial Services")
G.add_edge("Social Factors", "Technology & Knowledge Transfer")

G.add_edge("Economic Factors", "Policy & Government Support")
G.add_edge("Economic Factors", "Infrastructure Development")
G.add_edge("Economic Factors", "Access to Credit & Financial Services")
G.add_edge("Economic Factors", "Technology & Knowledge Transfer")

G.add_edge("Policy & Government Support", "Commercialization of Moringa Oleifera")
G.add_edge("Infrastructure Development", "Commercialization of Moringa Oleifera")
G.add_edge("Access to Credit & Financial Services", "Commercialization of Moringa Oleifera")
G.add_edge("Technology & Knowledge Transfer", "Commercialization of Moringa Oleifera")

# Define node colors based on their type
node_colors = {
    "Independent Variable": "lightblue",
    "Intervening Variable": "lightgreen",
    "Dependent Variable": "lightcoral"
}

# Assign colors to nodes
colors = [node_colors[G.nodes[node]["type"]] for node in G.nodes]

# Draw the graph
plt.figure(figsize=(12, 8))
pos = nx.spring_layout(G, seed=42)  # Use spring layout for positioning
nx.draw(
    G,
    pos,
    with_labels=True,
    node_size=3000,
    node_color=colors,
    font_size=10,
    font_weight="bold",
    arrowsize=20,
    edge_color="gray"
)

# Add labels to edges
edge_labels = nx.get_edge_attributes(G, 'weight')
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)

# Show the graph
plt.title("Conceptual Framework for Moringa Oleifera Commercialization", fontsize=16)
plt.show()
